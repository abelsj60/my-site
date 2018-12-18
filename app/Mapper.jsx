export default function Mapper(props) {
  return props.mapData.map((d, index) => {
    return props.render(d, index);
  });
}
