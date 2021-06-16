export default function SideListItem({ isSelectedCrypto, selectCrypto, item }) {
  const { id, name } = item;
  return (
    <li>
      <button
        className={isSelectedCrypto(id) ? "selected" : ""}
        onClick={() => selectCrypto(id)}
      >
        {name}
      </button>
    </li>
  );
}
