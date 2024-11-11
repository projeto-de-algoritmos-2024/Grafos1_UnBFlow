import React, { useState } from "react";
import "./style.css";

type SearchFormProps = {
    onSearch: (param1: string, param2: string, useParam1: boolean, useParam2: boolean) => void;
}

function SearchForm( { onSearch }: SearchFormProps ) {
    const [param1, setParam1] = useState("");
    const [param2, setParam2] = useState("");
    const [useParam1, setUseParam1] = useState(false);
    const [useParam2, setUseParam2] = useState(false);

    const handleSearch = () => {
        onSearch(param1, param2, useParam1, useParam2);
    }

    return (
        <div className="searchForm">
            <h2>Preencha as informações do componente que deseja consultar</h2>
            <div>
                <input
                    type="checkbox"
                    checked={useParam1}
                    onChange={() => setUseParam1(!useParam1)}    
                />
                <input
                    type="text"
                    list="unidades"
                    placeholder="Selecione a Unidade Responsável"
                    value={param1}
                    onChange={e => setParam1(e.target.value)}
                    disabled={!useParam1}
                />
                <datalist id="unidades">	
                    <option value="672">CAMPUS UNB CEIL&Acirc;NDIA: FACULDADE DE CIENCIAS E TECNOLOGIAS EM SA&Uacute;DE - BRAS&Iacute;LIA</option>
                    <option value="673">CAMPUS UNB GAMA: FACULDADE DE CI&Ecirc;NCIAS E TECNOLOGIAS EM ENGENHARIA - BRAS&Iacute;LIA</option>
                    <option value="640">CENTRO DE DESENVOLVIMENTO SUSTENT&Aacute;VEL - BRAS&Iacute;LIA</option>
                    <option value="314">CENTRO DE EXCEL&Ecirc;NCIA EM TURISMO - BRAS&Iacute;LIA</option>
                    <option value="650">CENTRO ESTUDOS AVAN&Ccedil;ADOS MULTIDISCIPLIN - BRAS&Iacute;LIA</option>
                    <option value="316">CENTRO INTEGRADO ORDENAMENTO TERRITORIAL - BRAS&Iacute;LIA</option>
                    <option value="1448">CENTRO INTERNACIONAL DE BIO&Eacute;TICA E HUMANIDADES - BRAS&Iacute;LIA</option>
                    <option value="677">CENTRO UNB CERRADO - BRAS&Iacute;LIA</option>
                    <option value="130">DECANATO DE ENSINO DE GRADUACAO / DEG - BRAS&Iacute;LIA</option>
                    <option value="170">DECANATO DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O / DPG - BRAS&Iacute;LIA</option>
                    <option value="158">DECANATO EXTENS&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="351">DEPARTAMENTO DE AUDIOVISUAIS E PUBLICIDADE/DAP - BRAS&Iacute;LIA</option>
                    <option value="345">DEPARTAMENTO DE COMUNICA&Ccedil;&Atilde;O ORGANIZACIONAL/COM - BRAS&Iacute;LIA</option>
                    <option value="660">DEPARTAMENTO DE DESIGN (11.01.01.14.04) - BRAS&Iacute;LIA</option>
                    <option value="449">DEPARTAMENTO DE ENGENHARIA MECANICA - BRAS&Iacute;LIA</option>
                    <option value="479">DEPARTAMENTO DE ESTUDOS LATINO AMERICANO - BRAS&Iacute;LIA</option>
                    <option value="678">DEPARTAMENTO DE FARMACIA - BRAS&Iacute;LIA</option>
                    <option value="791">DEPARTAMENTO DE GESTAO DE POLITICAS PUBL - BRAS&Iacute;LIA</option>
                    <option value="352">DEPARTAMENTO DE JORNALISMO/JOR - BRAS&Iacute;LIA</option>
                    <option value="518">DEPARTAMENTO DE MATEM&Aacute;TICA - BRAS&Iacute;LIA</option>
                    <option value="390">DEPARTAMENTO DE M&Eacute;TODOS E T&Eacute;CNICAS - BRAS&Iacute;LIA</option>
                    <option value="391">DEPARTAMENTO DE POL&Iacute;TICAS P&Uacute;BLICAS E GEST&Atilde;O DA EDUCA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="592">DEPARTAMENTO DE PSICOLOGIA CL&Iacute;NICA - BRAS&Iacute;LIA</option>
                    <option value="483">DEPARTAMENTO DE SOCIOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="392">DEPARTAMENTO DE TEORIA E FUNDAMENTOS - BRAS&Iacute;LIA</option>
                    <option value="327">DEPTO ADMINISTRA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="481">DEPTO ANTROPOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="492">DEPTO ARTES C&Ecirc;NICAS - BRAS&Iacute;LIA</option>
                    <option value="498">DEPTO ARTES VISUAIS - BRAS&Iacute;LIA</option>
                    <option value="464">DEPTO BIOLOGIA CELULAR - BRAS&Iacute;LIA</option>
                    <option value="462">DEPTO BOT&Acirc;NICA - BRAS&Iacute;LIA</option>
                    <option value="333">DEPTO CI&Ecirc;NCIAS CONT&Aacute;BEIS ATUARIAIS - BRAS&Iacute;LIA</option>
                    <option value="508">DEPTO CI&Ecirc;NCIAS DA COMPUTA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="466">DEPTO CI&Ecirc;NCIAS FISIOL&Oacute;GICAS - BRAS&Iacute;LIA</option>
                    <option value="337">DEPTO CI&Ecirc;NCIAS INFORMA&Ccedil;&Atilde;O DOCUMENTA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="467">DEPTO ECOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="548">DEPTO ECONOMIA - BRAS&Iacute;LIA</option>
                    <option value="422">DEPTO ENFERMAGEM - BRAS&Iacute;LIA</option>
                    <option value="437">DEPTO ENGENHARIA CIVIL E AMBIENTAL - BRAS&Iacute;LIA</option>
                    <option value="760">DEPTO ENGENHARIA DE PRODUCAO - BRAS&Iacute;LIA</option>
                    <option value="443">DEPTO ENGENHARIA ELETRICA - BRAS&Iacute;LIA</option>
                    <option value="433">DEPTO ENGENHARIA FLORESTAL - BRAS&Iacute;LIA</option>
                    <option value="514">DEPTO ESTAT&Iacute;STICA - BRAS&Iacute;LIA</option>
                    <option value="552">DEPTO FILOSOFIA - BRAS&Iacute;LIA</option>
                    <option value="469">DEPTO FITOPATOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="471">DEPTO GEN&Eacute;TICA E MORFOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="555">DEPTO GEOGRAFIA - BRAS&Iacute;LIA</option>
                    <option value="539">DEPTO GEOLOGIA GERAL APLICADA - BRAS&Iacute;LIA</option>
                    <option value="541">DEPTO GEOQU&Iacute;MICA E RECURSOS MINERAIS - BRAS&Iacute;LIA</option>
                    <option value="559">DEPTO HIST&Oacute;RIA - BRAS&Iacute;LIA</option>
                    <option value="578">DEPTO LINGUISTICA, PORT. LING. CLASSICAS - BRAS&Iacute;LIA</option>
                    <option value="574">DEPTO L&Iacute;NGUAS ESTRANGEIRAS E TRADU&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="540">DEPTO MINERALOGIA E PETROLOGIA - BRAS&Iacute;LIA</option>
                    <option value="495">DEPTO M&Uacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="424">DEPTO NUTRICAO - BRAS&Iacute;LIA</option>
                    <option value="427">DEPTO ODONTOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="594">DEPTO PROCESSOS PSICOL&Oacute;GICOS B&Aacute;SICOS - BRAS&Iacute;LIA</option>
                    <option value="360">DEPTO PROJETOS EXPRES REPRES ARQ E URBAN - BRAS&Iacute;LIA</option>
                    <option value="593">DEPTO PSICOLOGIA ESCOLAR DESENVOLVIMENTO - BRAS&Iacute;LIA</option>
                    <option value="596">DEPTO PSICOLOGIA SOCIAL E DO TRABALHO - BRAS&Iacute;LIA</option>
                    <option value="420">DEPTO SAUDE COLETIVA - BRAS&Iacute;LIA</option>
                    <option value="563">DEPTO SERVI&Ccedil;O SOCIAL - BRAS&Iacute;LIA</option>
                    <option value="361">DEPTO TECNOLOGIA ARQUITETURA URBANISMO - BRAS&Iacute;LIA</option>
                    <option value="362">DEPTO TEORIA HISTORIA ARQUIT E URBANISM - BRAS&Iacute;LIA</option>
                    <option value="580">DEPTO TEORIA LITER&Aacute;RIA E LITERATURA - BRAS&Iacute;LIA</option>
                    <option value="472">DEPTO ZOOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="643">DIRETORIA DO CENTRO DE APOIO AO DESENVOLVIMENTO TECNOL&Oacute;GICO - BRAS&Iacute;LIA</option>
                    <option value="363">FACULDADE DE AGRONOMIA E MEDICINA VETERIN&Aacute;RIA - BRAS&Iacute;LIA</option>
                    <option value="353">FACULDADE DE ARQUITETURA E URBANISMO - BRAS&Iacute;LIA</option>
                    <option value="674">FACULDADE DE CI&Ecirc;NCIA DA INFORMA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="410">FACULDADE DE CI&Ecirc;NCIAS DA SA&Uacute;DE - BRAS&Iacute;LIA</option>
                    <option value="343">FACULDADE DE COMUNICA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="370">FACULDADE DE DIREITO - BRAS&Iacute;LIA</option>
                    <option value="381">FACULDADE DE EDUCA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="393">FACULDADE DE EDUCA&Ccedil;&Atilde;O F&Iacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="402">FACULDADE DE MEDICINA - BRAS&Iacute;LIA</option>
                    <option value="666">FACULDADE DE PLANALTINA - BRAS&Iacute;LIA</option>
                    <option value="429">FACULDADE DE TECNOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="323">FACULDADE ECONOMIA,  ADMINISTRA&Ccedil;&Atilde;O,  CONTABILIDADE E  GEST POL P&Uacute;BLICAS - BRAS&Iacute;LIA</option>
                    <option value="1201">GRADUA&Ccedil;&Atilde;O EM ADMINISTRA&Ccedil;&Atilde;O - BACHARELADO - BRAS&Iacute;LIA</option>
                    <option value="288">HOSP-HOSPITAL UNIVERSIT&Aacute;RIO DE BRAS&Iacute;LIA - BRAS&Iacute;LIA</option>
                    <option value="485">INSTITUTO DE ARTES - BRAS&Iacute;LIA</option>
                    <option value="668">INSTITUTO DE CI&Ecirc;NCIA POL&Iacute;TICA - BRAS&Iacute;LIA</option>
                    <option value="455">INSTITUTO DE CI&Ecirc;NCIAS BIOL&Oacute;GICAS - BRAS&Iacute;LIA</option>
                    <option value="504">INSTITUTO DE CI&Ecirc;NCIAS EXATAS - BRAS&Iacute;LIA</option>
                    <option value="544">INSTITUTO DE CI&Ecirc;NCIAS HUMANAS - BRAS&Iacute;LIA</option>
                    <option value="473">INSTITUTO DE CI&Ecirc;NCIAS SOCIAIS - BRAS&Iacute;LIA</option>
                    <option value="524">INSTITUTO DE F&Iacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="533">INSTITUTO DE GEOCI&Ecirc;NCIAS - BRAS&Iacute;LIA</option>
                    <option value="567">INSTITUTO DE LETRAS - BRAS&Iacute;LIA</option>
                    <option value="583">INSTITUTO DE PSICOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="610">INSTITUTO DE QU&Iacute;MICA - BRAS&Iacute;LIA</option>
                    <option value="669">INSTITUTO DE RELA&Ccedil;&Otilde;ES INTERNACIONAIS - BRAS&Iacute;LIA</option>
                    <option value="542">OBSERVAT&Oacute;RIO SISMOL&Oacute;GICO - BRAS&Iacute;LIA</option>
                    <option value="1080">PARQUE CIENT&Iacute;FICO E TECNOL&Oacute;GICO DA UNB - BRAS&Iacute;LIA</option>
                    <option value="1615">PARQUE DE INOVA&Ccedil;&Atilde;O E SUSTENTABILIDADE DO AMBIENTE CONSTRU&Iacute;DO - BRAS&Iacute;LIA</option>
                    <option value="1617">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ADMINISTRA&Ccedil;&Atilde;O (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="664">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ADMINISTRA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="1847">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ADMINISTRA&Ccedil;&Atilde;O P&Uacute;BLICA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="853">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM AGRONEG&Oacute;CIOS - BRAS&Iacute;LIA</option>
                    <option value="854">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM AGRONOMIA - BRAS&Iacute;LIA</option>
                    <option value="855">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ANTROPOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="927">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ARQUITETURA E URBANISMO - BRAS&Iacute;LIA</option>
                    <option value="842">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ARTES C&Ecirc;NICAS - BRAS&Iacute;LIA</option>
                    <option value="911">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ARTES VISUAIS - BRAS&Iacute;LIA</option>
                    <option value="1491">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM BIOLOGIA ANIMAL - BRAS&Iacute;LIA</option>
                    <option value="1501">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM BIOLOGIA MICROBIANA - BRAS&Iacute;LIA</option>
                    <option value="1492">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM BIOTECNOLOGIA E BIODIVERSIDADE - REDE PR&Oacute;-CENTRO-OESTE - BRAS&Iacute;LIA</option>
                    <option value="831">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM BIO&Eacute;TICA - BRAS&Iacute;LIA</option>
                    <option value="1489">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM BOT&Acirc;NICA - BRAS&Iacute;LIA</option>
                    <option value="900">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIA POL&Iacute;TICA - BRAS&Iacute;LIA</option>
                    <option value="995">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS AMBIENTAIS - BRAS&Iacute;LIA</option>
                    <option value="909">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS ANIMAIS - BRAS&Iacute;LIA</option>
                    <option value="1488">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS BIOL&Oacute;GICAS (BIOLOGIA MOLECULAR) - BRAS&Iacute;LIA</option>
                    <option value="896">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS CONT&Aacute;BEIS - BRAS&Iacute;LIA</option>
                    <option value="946">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS DA INFORMA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="898">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS DA REABILITA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="902">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS DA SA&Uacute;DE - BRAS&Iacute;LIA</option>
                    <option value="988">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS DE MATERIAIS - BRAS&Iacute;LIA</option>
                    <option value="903">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS DO COMPORTAMENTO - BRAS&Iacute;LIA</option>
                    <option value="897">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS E TECNOLOGIAS EM SA&Uacute;DE - BRAS&Iacute;LIA</option>
                    <option value="906">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS FARMAC&Ecirc;UTICAS - BRAS&Iacute;LIA</option>
                    <option value="997">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS FLORESTAIS - BRAS&Iacute;LIA</option>
                    <option value="904">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS MEC&Acirc;NICAS - BRAS&Iacute;LIA</option>
                    <option value="845">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS M&Eacute;DICAS - BRAS&Iacute;LIA</option>
                    <option value="840">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM COMPUTA&Ccedil;&Atilde;O APLICADA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="841">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM COMUNICA&Ccedil;&Atilde;O/PPGCOM - BRAS&Iacute;LIA</option>
                    <option value="929">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM DESENVOLVIMENTO E COOPERA&Ccedil;&Atilde;O INTERNACIONAL - BRAS&Iacute;LIA</option>
                    <option value="1487">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM DESENVOLVIMENTO SUSTENT&Aacute;VEL - BRAS&Iacute;LIA</option>
                    <option value="875">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM DESIGN - BRAS&Iacute;LIA</option>
                    <option value="914">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM DIREITO - BRAS&Iacute;LIA</option>
                    <option value="1505">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM DIREITO, REGULA&Ccedil;&Atilde;O E POL&Iacute;TICAS P&Uacute;BLICAS - BRAS&Iacute;LIA</option>
                    <option value="916">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM DIREITOS HUMANOS E CIDADANIA - BRAS&Iacute;LIA</option>
                    <option value="1490">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ECOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="1619">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ECONOMIA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1198">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ECONOMIA - BRAS&Iacute;LIA</option>
                    <option value="1620">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM EDUCA&Ccedil;&Atilde;O (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="977">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM EDUCA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="1185">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM EDUCA&Ccedil;&Atilde;O EM CI&Ecirc;NCIAS - BRAS&Iacute;LIA</option>
                    <option value="1625">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM EDUCA&Ccedil;&Atilde;O F&Iacute;SICA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="910">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM EDUCA&Ccedil;&Atilde;O F&Iacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="843">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENFERMAGEM - BRAS&Iacute;LIA</option>
                    <option value="959">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENGENHARIA BIOM&Eacute;DICA - BRAS&Iacute;LIA</option>
                    <option value="949">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENGENHARIA DE SISTEMAS ELETR&Ocirc;NICOS E AUTOMA&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="948">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENGENHARIA EL&Eacute;TRICA - BRAS&Iacute;LIA</option>
                    <option value="1186">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENSINO DE CI&Ecirc;NCIAS (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1506">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENSINO DE F&Iacute;SICA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1613">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ENSINO DE GEOGRAFIA EM REDE (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="876">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ESTAT&Iacute;STICA - BRAS&Iacute;LIA</option>
                    <option value="829">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ESTRUTURAS E CONSTRU&Ccedil;&Atilde;O CIVIL - BRAS&Iacute;LIA</option>
                    <option value="1225">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ESTUDOS COMPARADOS SOBRE AS AM&Eacute;RICAS - BRAS&Iacute;LIA</option>
                    <option value="1494">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ESTUDOS DA TRADU&Ccedil;&Atilde;O - BRAS&Iacute;LIA</option>
                    <option value="1664">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM FILOSOFIA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="917">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM FILOSOFIA - BRAS&Iacute;LIA</option>
                    <option value="947">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM FITOPATOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="985">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM F&Iacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="932">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GEOCI&Ecirc;NCIAS APLICADAS E GEODIN&Acirc;MICA - BRAS&Iacute;LIA</option>
                    <option value="1493">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GEOGRAFIA - BRAS&Iacute;LIA</option>
                    <option value="931">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GEOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="901">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GEOTECNIA - BRAS&Iacute;LIA</option>
                    <option value="1503">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GEST&Atilde;O E REGULA&Ccedil;&Atilde;O DE RECURSOS H&Iacute;DRICOS - PROF&Aacute;GUA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="933">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GEST&Atilde;O P&Uacute;BLICA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1616">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM GOVERNAN&Ccedil;A E INOVA&Ccedil;&Atilde;O EM POL&Iacute;TICAS P&Uacute;BLICAS (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="928">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM HIST&Oacute;RIA - BRAS&Iacute;LIA</option>
                    <option value="895">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM INFORM&Aacute;TICA - BRAS&Iacute;LIA</option>
                    <option value="960">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM INTEGRIDADE DE MATERIAIS DA ENGENHARIA - BRAS&Iacute;LIA</option>
                    <option value="1495">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM LINGU&Iacute;STICA - BRAS&Iacute;LIA</option>
                    <option value="1203">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM LINGU&Iacute;STICA APLICADA - BRAS&Iacute;LIA</option>
                    <option value="987">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM LITERATURA - BRAS&Iacute;LIA</option>
                    <option value="983">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM MATEM&Aacute;TICA - BRAS&Iacute;LIA</option>
                    <option value="990">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM MATEM&Aacute;TICA EM REDE NACIONAL (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="874">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM MEDICINA TROPICAL - BRAS&Iacute;LIA</option>
                    <option value="996">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM MEIO AMBIENTE EM DESENVOLVIMENTO RURAL - BRAS&Iacute;LIA</option>
                    <option value="926">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM METAF&Iacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="873">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM M&Uacute;SICA - BRAS&Iacute;LIA</option>
                    <option value="1502">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM NANOCI&Ecirc;NCIA E NANOBIOTECNOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="899">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM NUTRI&Ccedil;&Atilde;O HUMANA - BRAS&Iacute;LIA</option>
                    <option value="907">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ODONTOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="1496">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PATOLOGIA MOLECULAR - BRAS&Iacute;LIA</option>
                    <option value="1499">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM POL&Iacute;TICA SOCIAL - BRAS&Iacute;LIA</option>
                    <option value="1624">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM POL&Iacute;TICAS P&Uacute;BLICAS PARA INF&Acirc;NCIA E JUVENTUDE (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="982">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PROCESSOS DE DESENVOLVIMENTO HUMANO E SA&Uacute;DE - BRAS&Iacute;LIA</option>
                    <option value="1618">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PROFARTES (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1545">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PROFARTES - BRAS&Iacute;LIA</option>
                    <option value="978">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PROFNIT - PROPRIEDADE INTELECTUAL E TRANSFER&Ecirc;NCIA DE TECNOLOGIA PARA A INOVA&Ccedil;&Atilde;O (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="986">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PSICOLOGIA CL&Iacute;NICA E CULTURA - BRAS&Iacute;LIA</option>
                    <option value="1497">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PSICOLOGIA DO DESENVOLVIMENTO E ESCOLAR - BRAS&Iacute;LIA</option>
                    <option value="913">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM PSICOLOGIA SOCIAL, DO TRABALHO E DAS ORGANIZA&Ccedil;&Otilde;ES (PSTO) - BRAS&Iacute;LIA</option>
                    <option value="844">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM QU&Iacute;MICA - BRAS&Iacute;LIA</option>
                    <option value="1622">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM REDE NACIONAL PARA ENSINO DAS CI&Ecirc;NCIAS AMBIENTAIS (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1546">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM REDE NACIONAL PARA ENSINO DAS CI&Ecirc;NCIAS AMBIENTAIS - BRAS&Iacute;LIA</option>
                    <option value="1498">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM RELA&Ccedil;&Otilde;ES INTERNACIONAIS - BRAS&Iacute;LIA</option>
                    <option value="872">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM SA&Uacute;DE ANIMAL - BRAS&Iacute;LIA</option>
                    <option value="1623">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM SA&Uacute;DE COLETIVA (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="908">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM SA&Uacute;DE COLETIVA - BRAS&Iacute;LIA</option>
                    <option value="912">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM SISTEMAS MECATR&Ocirc;NICOS - BRAS&Iacute;LIA</option>
                    <option value="915">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM SOCIOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="1504">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM SUSTENTABILIDADE JUNTO A POVOS E TERRIT&Oacute;RIOS TRADICIONAIS - BRAS&Iacute;LIA</option>
                    <option value="830">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM TECNOLOGIA AMBIENTAL E RECURSOS H&Iacute;DRICOS - BRAS&Iacute;LIA</option>
                    <option value="930">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM TECNOLOGIAS QU&Iacute;MICA E BIOL&Oacute;GICA - BRAS&Iacute;LIA</option>
                    <option value="828">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM TRANSPORTES - BRAS&Iacute;LIA</option>
                    <option value="1500">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O EM ZOOLOGIA - BRAS&Iacute;LIA</option>
                    <option value="1543">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O PROFBIO ENSINO DE BIOLOGIA EM REDE NACIONAL (PROFISSIONAL) - BRAS&Iacute;LIA</option>
                    <option value="1621">PROGRAMA DE P&Oacute;S-GRADUA&Ccedil;&Atilde;O PROFISSIONAL EM ENGENHARIA EL&Eacute;TRICA - BRAS&Iacute;LIA</option>
                    <option value="69">REITORIA - BRAS&Iacute;LIA</option>
                    <option value="140">SECRETARIA DE ADMINISTRACAO ACADEMICA - BRAS&Iacute;LIA</option>
                </datalist>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={useParam2}
                    onChange={() => setUseParam2(!useParam2)}    
                />
                <input
                    type="text"
                    placeholder="Escreva o nome/código do Componente"
                    value={param2}
                    onChange={e => setParam2(e.target.value)}
                    disabled={!useParam2}
                />
            </div>
            <button onClick={handleSearch}>Buscar</button>
        </div>
    );
}   

export default SearchForm;