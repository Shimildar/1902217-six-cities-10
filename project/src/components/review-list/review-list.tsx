import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction } from '../../store/api-actions';
import { getComments } from '../../store/data-process/selectors';
import { sortReviews } from '../../utils/sort';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  id: number
}

const MAX_REVIEW_COUNT = 10;

export default function ReviewList({ id }: ReviewListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getComments);
  const sortedReviews = reviews.slice(0, MAX_REVIEW_COUNT).sort(sortReviews);

  useEffect(() => {
    dispatch(fetchCommentsAction(id));
  }, [dispatch, id]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <ReviewItem key={review.id} review={review} />)}
      </ul>
    </>
  );
}
