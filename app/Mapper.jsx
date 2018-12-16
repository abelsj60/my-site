export default function Mapper(props) {
  return props.mapData.map((section, index) => {
    return props.render(section, index);
  });
}
