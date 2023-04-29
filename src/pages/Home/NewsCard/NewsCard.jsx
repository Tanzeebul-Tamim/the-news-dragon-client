import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, rating, total_view } = news;
  return (
    <Card className="mb-4" style={{border: "1px solid #e6e6e6"}}>
      <Card.Header className="d-flex align-items-center">
        <Image style={{height: "40px"}} src={author?.img} roundedCircle />
        <div className="ps-3 flex-grow-1">
            <p className="mb-0 fw-bold">{author?.name}</p>
            <p><small>{moment(author?.published_date).format('YYYY-MM-DD')}</small></p>
        </div>
        <div>
            <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text className="mt-4">
          {details.length < 250 ?
          <>{details}</> :
          <>
            {details.slice (0, 250)}.... 
            <Link to={`/news/${_id}`} style={{color: "orange"}} className="text-decoration-none fw-bold">
                Read More
            </Link>
          </>}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
            <div className="fs-6 d-flex gap-3">
            <Rating 
                className="d-flex gap-2"               
                placeholderRating={rating?.number}
                readonly
                emptySymbol={<FaRegStar className="text-warning"></FaRegStar>}
                placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                fullSymbol={<FaStar></FaStar>}/>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye></FaEye> {total_view}
            </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
