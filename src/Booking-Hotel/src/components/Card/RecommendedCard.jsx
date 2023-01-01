import React from 'react';
import { Link } from 'react-router-dom';
export default function RecommendedCard({ id, name, thumbnail }) {
  return (
    <Link to={`/detail/${id}`} className="no-underline text-inherit">
      <div className="flex flex-col cursor-pointer w-[200px] h-[200px]">
        <img
          src={thumbnail}
          alt=""
          className="w-[200px] h-[200px] rounded-xl mb-1"
        />
        <span className="text-xl truncate">{name}</span>
      </div>
    </Link>
  );
}
