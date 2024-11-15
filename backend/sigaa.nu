# João V. Farias © BeyondMagic 2024 <beyondmagic@mail.ru>
# Renan V. Guedes © R-enanVieira 2024 <renanv.guedes7@gmail.com>

# Calculate all classes of a HTML page.
def calculate-class [
	format: string # The RegEx used to get the classes.
]: string -> list<record<code: string, name: string>> {

	let classes = $in
		| parse --regex $format
		| get capture0.0

	# If not empty, then calculate table.
	if $classes == '-' {
		[]
	} else {
		$classes
		| parse --regex `title='(.*?)'`
		| get capture0
		| split column ` - ` code name
	}
}

# Get initial ID state of the secure forms (so called state).
#
# It is for getting form unique validator.
export def get-state []: string -> int {
	$in
	| parse --regex `id="javax.faces.ViewState" value="j_id(.*?)"`
	| get capture0.0
}

# Make headers from input data.
def make-headers []: string -> record {
	{
		Cookie: $in
		Host: "sigaa.unb.br"
		User-Agent: "Mozilla/5.0 (X11; Linux x86_64; rv:122.0) Gecko/20100101 Firefox/122.0"
		Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
		Accept-Language: "en-GB,ja;q=0.8,pt-BR;q=0.5,fr-FR;q=0.3"
		Accept-Encoding: "gzip, deflate, br"
		Referer: "https://sigaa.unb.br/sigaa/portais/discente/discente.jsf"
		Connection: "keep-alive"
		Sec-Fetch-Dest: "document"
		Sec-Fetch-Mode: "navigate"
		Sec-Fetch-Site: "same-site"
		Sec-Fetch-User: "?1"
		Upgrade-Insecure-Requests: "1"
	}
}

# Get special content-length.
# http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13
def get-content-length [
	bias: int = 3 # How much should it take from the content.
]: record -> record<content: string, length: int> {
	let data = $in

	let length = (
		($data | columns)
		++
		($data | values)
		| str join ': '
		| str length
	) - $bias

	{
		content: $data
		length: $length
	}
}

# Get simpler session and state for listing classes.
export def get-session []: nothing -> record<session: string, state: int, departments: list<int>> {
	let result = (
		http get
		--full
		"https://sigaa.unb.br/sigaa/public/turmas/listar.jsf"
	)

	let departments = $result
		| get body
		| str replace --all --regex "\r|\n|\t" ``
		| parse --regex `formTurma:inputDepto(.*?)</select>`
		| get capture0.0
		| parse --regex `value="(.*?)">`
		| get capture0
		| skip 1
		| into int
		 # ^^ Skip the first option because it's not a department, "SELECIONE".

	let cookie = $result
		| get headers.response
		| where name == set-cookie
		| get value.0

	let state = $result
		| get body
		| get-state

	{
		session: $cookie
		state: $state
		departments: $departments
	}
}

# Get all classes IDs of this department.
export def get-department [
	department: int # Department ID from the session.
]: record<session: string, state: int> -> record<state: int, classes: list<int>> {

	let data = {
		"formTurma": "formTurma",
		"formTurma:inputNivel": "G",
		"formTurma:inputDepto": $department,
		"formTurma:inputAno": "2024",
		"formTurma:inputPeriodo": "2",
		"formTurma:j_id_jsp_1370969402_11": "Buscar",
		"javax.faces.ViewState": $"j_id($in.state)"
	}

	let body = { session: $in.session, content: $data }
		| post
		| get body

	let classes = $body
		| str replace --all --regex "\r|\n|\t" ``
		| parse --regex `'id':'(.*?)','publico':'public'`
		| get capture0
		| into int
	
	{
		state: ($body | get-state)
		classes: $classes
	}
}

# Retrieve information into record from class page.
export def get-class [
	class: int # Class to get information from.
]: record<session: string, state: int, department: int> -> record<code: string, name: string, pre: list<record<code: string, name: string>>, co: list<record<code: string, name: string>>, equiv: list<record<code: string, name: string>> > {

	let data = {
		"formTurma": "formTurma",
		"formTurma:inputNivel": "G",
		"formTurma:inputDepto": $in.department,
		"formTurma:inputAno": "2024",
		"formTurma:inputPeriodo": "2",
		"javax.faces.ViewState": $"j_id($in.state)"
		"formTurma:aqui": "formTurma:aqui",
		"id": $class,
		"publico": "public"
	}

	let cropped_page = { session: $in.session, content: $data }
		| post 5
		| get body
		| str replace --all --regex "\r|\n|\t" ``

	let code = $cropped_page
		| parse --regex `C&#243;digo:</th><td>(.*?)</td>`
		| get capture0.0

	let name = $cropped_page
		| parse --regex `Nome:</th><td>(.*?)</td>`
		| get capture0.0

	let pre = $cropped_page
		| calculate-class `Pr&#233;-Requisitos:</th><td>(.*?)</td>`

	let co = $cropped_page
		| calculate-class `Co-Requisitos:</th><td>(.*?)</td>`

	let equiv = $cropped_page
		| calculate-class `Equival&#234;ncias:</th><td>(.*?)</td>`

	{
		code: $code
		name: $name
		pre: $pre
		co: $co
		equiv: $equiv
	}
}

# Get classes of a department.
export def get-department-classes [
	classes: list<int> # Classes to get info.
]: record<session: string, state: int, department: int> -> list<record<code: string, name: string, pre: list<record<code: string, name: string>>, co: list<record<code: string, name: string>>, equiv: list<record<code: string, name: string>> >> {
	let data = $in

	$classes | each {|id|
		let state = $data.session | request
		let state = {
			session: $data.session,
			state: $state
		} | get-department $data.department | get state

		{
			session: $data.session
			state: $state
			department: $data.department
		} | get-class $id
	}
}

# Get departments of all classes
export def get-departments [
	departments: list<int> # Departments to get info of classes.
]: record<session: string, state: int> -> list<record<code: string, name: string, pre: list<record<code: string, name: string>>, co: list<record<code: string, name: string>>, equiv: list<record<code: string, name: string>> >> {
	let data = $in

	$departments | each {|id|
		let state = $data.session | request

		let dep_data = { 
			session: $data.session
			state: $state
		} | get-department $id

		let classes = {
			session: $data.session
			state: $dep_data.state
			department: $id
		} | get-department-classes $dep_data.classes

		let end = {
			department: $id
			classes: $classes
		}

		print $end

		$end
	}
}

# Scrap all the information and save the file.
#
# Take around one hour.
export def scrap [
	output = './disciplinas.json' # Output path.
]: nothing -> nothing {
	let session = get-session

	let deps = open dados.json
		| get departments

	open dados.json
	| get-departments $deps
	| save $output --force
}

# Make POST request to Listar.
def post [
	bias: int = 3 # How much should it take from the content.
]: record<session: string, content: record> -> any {

	let content = $in.content
		| get-content-length $bias

	let headers = $in.session
		| make-headers

	(
		http post
		--full
		--content-type `application/x-www-form-urlencoded`
		--redirect-mode='manual'
		--headers {
			...$headers
			Content-Length: $content.length
		}
		'https://sigaa.unb.br/sigaa/public/turmas/listar.jsf'
		$in.content
	)
}

# Get the default page to get new Javax.
export def request []: string -> int {
	(
		http get
		--full
		--redirect-mode="manual"
		--headers ($in | make-headers)
		"https://sigaa.unb.br/sigaa/public/turmas/listar.jsf"
	) | get body | get-state
}
