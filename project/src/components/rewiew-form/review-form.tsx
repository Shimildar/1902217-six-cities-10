import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FormData } from '../../types/review';
import ReviewRatingStars from '../review-rating-stars/review-rating-stars';
import { useAppDispatch } from '../../hooks';
import { setCommentAction } from '../../store/api-actions';

const MIN_COMMENT_LENGTH = 50;
const MAX_COMMENT_LENGTH = 300;

const defaultFormData = {
  comment: '',
  rating: null
};

const RatingData = [
  {
    title: 'perfect',
    value: 5
  },
  {
    title: 'good',
    value: 4
  },
  {
    title: 'not bad',
    value: 3
  },
  {
    title: 'badly',
    value: 2
  },
  {
    title: 'terribly',
    value: 1
  }
];

type ReviewFormProps = {
  id: number
}

export default function ReviewForm({ id }: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formDisabled, setFormDisabled] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const fieldChangeHandle = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    setFormDisabled(true);
    dispatch(setCommentAction({ id, formData }));
    setFormData(defaultFormData);
    setFormDisabled(false);
  };

  useEffect(() => {
    setFormData(defaultFormData);
  }, [id]);

  return (
    <form
      className="reviews__form form"
      action=""
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RatingData.map((data) => <ReviewRatingStars key={data.value} ratingStar={data} isChecked={data.value === Number(formData.rating)} formDisabled={formDisabled} fieldChangeHandle={fieldChangeHandle} />)
        }
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        maxLength={MAX_COMMENT_LENGTH}
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={fieldChangeHandle}
        disabled={formDisabled}
        value={formData.comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formData.comment.length < MIN_COMMENT_LENGTH || formData.rating === null || formDisabled}
        >Submit
        </button>
      </div>
    </form>
  );
}
