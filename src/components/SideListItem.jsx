export default function SideListItem({ isSelectedCrypto, setSelectedCrypto,selectedCrypto, item }) {
  const { id, name } = item;
  return (
    <li>
      <button
        className={isSelectedCrypto(id) ? "selected" : ""}
        onClick={() => setSelectedCrypto(id === selectedCrypto ? null : id)}
      >
        {name}
      </button>
    </li>
  );
}
