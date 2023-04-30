import { DbItem } from '../../@types'
import css from './Card.module.scss'
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';

const Card = ({ productName, price, img, city }:DbItem) => {
  return (
    <div className={css.card}>
        <div className={css.grid}>
        <img className={css.grid} src={img} alt={`${productName}'s img`} />
        <HiOutlineHeart className={css.iconGrid}/>
        <HiHeart className={css.iconGrid}/>
        </div>
        <div className='d-flex justify-content-between'>
            <div className={css.title}>{productName}</div>
            <div className={css.title}>{price} ₪</div>
        </div>
        <div className={css.city}>{city}</div>
    </div>
  )
}

export default Card

// שמור לנאב
// BsClipboardHeart