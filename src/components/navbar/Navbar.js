export default function Navbar() {
  return (
    <ul id="menu">
      <li className="menu-icon">&#x2630;</li>
      <li>Default Image</li>
      <li>Load Image</li>
      <li>
        Shape:
        <select id="shape">
          <option value="1" defaultValue>Classic</option>
          <option value="2">Triangle</option>
          <option value="3">Round</option>
          <option value="4">Straight</option>
        </select>
      </li>
      <li>12 Pieces</li>
      <li>25 Pieces</li>
      <li>50 Pieces</li>
      <li>100 Pieces</li>
      <li>200 Pieces</li>
    </ul>
  );
}
