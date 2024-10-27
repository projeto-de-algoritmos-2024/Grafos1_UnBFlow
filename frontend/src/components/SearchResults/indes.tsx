import React from "react";
import "./style.css";

type SearchResultsProps = {
    results: string[];
}

function SearchResults({ results }: SearchResultsProps) {
    return (
        <div className="searchResults">
            <h2>Resultados da busca</h2>
            <ul>
                {results.length > 0 ? (
                    results.map((result,index) => <li key={result}>{result}</li>)
                ) : (
                    <p>Nenhum resultado encontrado</p>
                )}
            </ul>
        </div>
    );
}

export default SearchResults;