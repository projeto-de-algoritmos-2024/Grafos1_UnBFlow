# João V. Farias © BeyondMagic 2024 <beyondmagic@mail.ru>
# Renan V. Guedes © R-enanVieira 2024 <renanv.guedes7@gmail.com>

# Get initial ID state of the secure forms (so called state).
#
# It is for getting form unique validator.
def get-state []: string -> int {
	$in
	| parse --regex `id="javax.faces.ViewState" value="j_id(.*?)"`
	| get capture0.0
}

# Make headers from input data.
def make-headers []: record<session: string, content_length: int> -> record {
	{
		Cookie: $in.session
		Content-Length: $in.content_length
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
def get-content-length []: record -> record<content: string, length: int> {
	let data = $in

	let length = (
		($data | columns)
		++
		($data | values)
		| str join ': '
		| str length
	) - 3

	{
		content: $data
		length: $length
	}
}

# Get simpler session and state for listing classes.
export def get-session []: nothing -> record<session: string, state: int, departments: list<string>> {
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
]: record<session: string, state: int> -> list<int> {

	let data = {
		"formTurma": "formTurma",
		"formTurma:inputNivel": "G",
		"formTurma:inputDepto": $department,
		"formTurma:inputAno": "2024",
		"formTurma:inputPeriodo": "2",
		"formTurma:j_id_jsp_1370969402_11": "Buscar",
		"javax.faces.ViewState": $"j_id($in.state)"
	}

	{ session: $in.session, content: $data }
	| request
	| get body
	| str replace --all --regex "\r|\n|\t" ``
	| parse --regex `'id':'(.*?)','publico':'public'`
	| get capture0
	| into int
}


# Make request to Listar.
def request []: record<session: string, content: record> -> any {

	let content = $in.content
		| get-content-length

	let headers = {
		session: $in.session
		content_length: $content.length
	} | make-headers

	[
		http post
		--full
		--content-type 'application/x-www-form-urlencoded'
		--redirect-mode="manual"
		--headers $headers
		"https://sigaa.unb.br/sigaa/public/turmas/listar.jsf"
		$in.content
	] | str join "\n"
}
