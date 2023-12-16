import { useTVContext } from "../../contexts/tv.context";
import MovieCard from "../episodes/movie-card";

const TVList = () => {
  const { tvList } = useTVContext();
  console.log(tvList);
  return (
    <div className="container mx-auto pb-20">
      <h2 className="text-white text-3xl mb-6">TV shows</h2>
      <div className="grid gap-4 grid-cols-4">
        {tvList &&
          tvList.results.map((movie) => (
            <div className="w-[350px] h-[197px]">
              <MovieCard imgWidth={350} imgHeight={197} movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TVList;
