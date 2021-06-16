export default function SideListItem({ isSelectedCrypto, setSelectedCrypto, item }) {
  const { id, name } = item;
  return (
    <li>
      <button
        className={isSelectedCrypto(id) ? "selected" : ""}
        onClick={() => setSelectedCrypto(id)}
      >
        {name}
      </button>
    </li>
  );
}
