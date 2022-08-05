import { Review } from '../../types/review';
import { sortReviews } from '../../utils/sort';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Review[]
}

const MAX_REVIEW_COUNT = 10;

export default function ReviewList({ reviews }: ReviewListProps): JSX.Element {
  const sortedReviews = reviews.slice(0, MAX_REVIEW_COUNT).sort(sortReviews);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}
