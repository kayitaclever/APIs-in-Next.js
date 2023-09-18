'use client';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '@/app/utilities/utils';
import { NEXT_PUBLIC_IMAGE_BASE_URL } from '@/app/config';

const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
  const [movieDetail, setMovieDetail] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const movieDetailData = await getMovieDetails(movieId);
        setMovieDetail(movieDetailData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetail();
  }, [movieId]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      {movieDetail && (
        <div className="flex">
          <div>
            <img
              src={`${NEXT_PUBLIC_IMAGE_BASE_URL}${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="w-full h-auto rounded-3xl mt-8 ml-12"
              style={{ width: '40vw', maxHeight: '85vh' }}
            />
          </div>
          <div className="ml-16 mt-10 justify-center text-2xl">
            <h1 className="text-5xl font-bold text-blue-400 mb-4">{movieDetail.title}</h1>
            <p className="mr-10 ml-10">{movieDetail.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetail;
