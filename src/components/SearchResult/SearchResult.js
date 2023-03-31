import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchResult.scss";

export default function SearchResult(props) {
  // hàm render list movie
  const renderMovieList = () => {
    if (!props.searchData || props.searchData.Response === "False") return;

    return props.searchData.Search.map((movie, index) => {
      return (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          getMovieData={props.getMovieData}
        />
      );
    });
  };

  return (
    <section id="search_result">
      <h1>Search Result</h1>

      {/* Kiểm tra xem có phải mảng API trả về có lỗi gì không */}
      {props.searchData.Response === "False" ? (
        <p>{props.searchData.Error}</p>
      ) : (
        ""
      )}

      {/* render mảng kết quả tìm dc */}
      <div className="result_list_container">{renderMovieList()}</div>
    </section>
  );
}
