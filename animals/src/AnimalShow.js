import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// When mapping an object if the key & value are exactly the same then
// a JS shortcut is to just have one name represent both key & value.
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse
};

function AnimalShow({ type }) {
  return (
    <div>
      <img alt="animal" src={svgMap[type]} />
    </div>
  );
}

export default AnimalShow;
