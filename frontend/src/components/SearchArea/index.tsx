import React, { useState } from "react";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults/indes";
import "./style.css"

function SearchArea() {
    const [results, setResults] = useState<string[]>([]);

    //TO-DO: Lógica de busca
    const handleSearch = (param1: string, param2: string, useParam1: boolean, useParam2: boolean) => {
        const newResults = [
            `Resultado 1: ${param1}`,
            `Resultado 2: ${param2}`
        ];

        setResults(newResults);
    };

    return (
        <div className="searchArea">
            <SearchForm onSearch={handleSearch} />
            <SearchResults results={results} />
            <span>
                Copyleft 🄯  2024 | Feito com ♥️  por <a href="https://github.com/R-enanVieira">Renan V. Guedes</a> e <a href="https://github.com/beyondmagic">João V. Farias</a>
            </span>
        </div>
    );
}

export default SearchArea;
