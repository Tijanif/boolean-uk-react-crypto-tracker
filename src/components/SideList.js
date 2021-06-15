import SideListItem from './SideListItem';
const SideList = ({ isSelectedCripto, selectCripto, criptoList }) => {
  return (
    <ul>
      {criptoList.map((item) => {
        return (
          <SideListItem
            key={item.id}
            isSelectedCripto={isSelectedCripto}
            selectCripto={selectCripto}
            item={item}
          />
        );
      })}
    </ul>
  );
};

export default SideList;
