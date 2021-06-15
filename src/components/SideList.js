import SideListItem from './SideListItem';
const SideList = ({ isSelectedCripto, setSelectedCripto, criptoList }) => {
  return (
    <ul>
      {criptoList.map((item) => {
        return (
          <SideListItem
            key={item.id}
            isSelectedCripto={isSelectedCripto}
            setSelectedCripto={setSelectedCripto}
            item={item}
          />
        );
      })}
    </ul>
  );
};

export default SideList;
