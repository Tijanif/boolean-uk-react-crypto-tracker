export default function SideListItem({ isSelectedCrypto, selectedCrypto, item }) {
  const { id, name } = item;
  return (
    <li>
      <button
        className={isSelectedCrypto(id) ? "selected" : ""}
        onClick={() => selectedCrypto(id)}
      >
        {name}
      </button>
    </li>
  );
}
