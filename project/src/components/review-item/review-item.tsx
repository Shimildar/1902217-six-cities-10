import { Review } from '../../types/offer';
import { humanizeDate, convertRating } from '../../utils/common';

type ReviewItemProps = {
  review: Review
}

const reviewDateFormat = 'MMMM YYYY';

export default function ReviewItem({ review }: ReviewItemProps): JSX.Element {
  const { user, comment, date, rating } = review;
  const { name, avatarUrl, id } = user;

  return (
    <li key={id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${convertRating(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{humanizeDate(date, reviewDateFormat)}</time>
      </div>
    </li>
  );
}

