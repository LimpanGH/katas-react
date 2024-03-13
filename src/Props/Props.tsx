// * https://react.dev/learn/passing-props-to-a-component#recap
// * To pass props, add them to the JSX, just like you would with HTML attributes.
// * To read props, use the function Avatar({ person, size }) destructuring syntax.
// * You can specify a default value like size = 100, which is used for missing and undefined props.
// * You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
// * Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
// * Props are read-only snapshots in time: every render receives a new version of props.
// * You can’t change props. When you need interactivity, you’ll need to set state.

// * Example: Extract a component ---------------------------------------------
// This Gallery component contains some very similar markup for two profiles.
// Extract a Profile component out of it to reduce the duplication.
// You’ll need to choose what props to pass to it.

import { getImageUrl } from './Utils';

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className='profile'>
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className='avatar'
          src={getImageUrl('szV5sdG')}
          alt='Maria Skłodowska-Curie'
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className='profile'>
        <h2>Katsuko Saruhashi</h2>
        <img
          className='avatar'
          src={getImageUrl('YfeOqp2')}
          alt='Katsuko Saruhashi'
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}

// Solution:
// function Profile({name, imageId, profession, awards,discovery}) {
//   return(
//     <section className="profile">
//       h2
//     </section>
//   )
// }

// console.log('asdf');

// _______________________________________________________

type ProfileType = {
  name: string;
  imageId: string;
  profession: string;
  awards: string[];
  discovery: string;
};

// Profile component to display individual profiles
function Profile({
  name,
  imageId,
  profession,
  awards,
  discovery,
}: ProfileType) {
  return (
    <section className='profile'>
      <h2>{name}</h2>
      <img
        className='avatar'
        src={getImageUrl(imageId)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b>({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

// Gallery component
// export default function Gallery() {
// return (
//   <div>
//     <h1>Notable Scientists</h1>
//     <Profile
//       name='Maria Skłodowska-Curie'
//       imageId='szV5sdG'
//       profession='physicist and chemist'
//       awards={[
//         'Nobel Prize in Physics',
//         'Nobel Prize in Chemistry',
//         'Davy Medal',
//         'Matteucci Medal',
//       ]}
//       discovery='polonium (chemical element)'
//     />
//     <Profile
//       name='Katsuko Saruhashi'
//       imageId='YfeOqp2'
//       profession='geochemist'
//       awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
//       discovery='a method for measuring carbon dioxide in seawater'
//     />
//   </div>
// );

export const PropsView = () => {
  return <Gallery />;
};
