import { useState } from "react";
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
            <label>
                <input
                    type="checkbox"
                    checked={useParam1}
                    onChange={() => setUseParam1(!useParam1)}    
                />
                <input
                    type="text"
                    placeholder="Selecione a Unidade Responsável"
                    value={param1}
                    onChange={e => setParam1(e.target.value)}
                    disabled={!useParam1}
                />
            </label>
            <label>
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
            </label>
            <button type="button" onClick={handleSearch}>Buscar</button>
        </div>
    );
}   

export default SearchForm;
