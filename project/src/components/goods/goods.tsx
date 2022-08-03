type GoodsProps = {
  goods: string
}

export default function Goods({ goods }: GoodsProps): JSX.Element {
  return (
    <li className="property__inside-item">
      {goods}
    </li>
  );
}
