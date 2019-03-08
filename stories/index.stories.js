import React from 'react';

// https://blog.bam.tech/developper-news/use-storybook-react-project
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/react/demo';

import '../src/css/App.css';

import Alert from '../src/components/Common/Alert/Alert';
import Header from '../src/components/Common/Header/Header';
import Message from '../src/components/Common/Message/Message';
import RepoNote from '../src/components/RepoNote/RepoNote';

storiesOf('Welcome', module).add('to the reponotesreact Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

// storiesOf('Button', module)
//   .addDecorator(withKnobs)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ))
//   .add('playground', () => (
//     <Button
//       label={text('label', 'Hello World !')}
//       big={boolean('big', true)}
//       style={object('style', {})}
//     >
//       Playground
//     </Button>
//   ));

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('error', () => <Alert message={text('Alert label', 'An Error Alert')} kind="error" />);

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('default', () => <Header username={text('Username label', 'Jac21')} />);

storiesOf('Message', module)
  .addDecorator(withKnobs)
  .add('default', () => <Message text={text('Message label', 'A Plain Message')} />);

storiesOf('RepoNote', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <RepoNote
      repositoryName="reponotesreact"
      repositoryUrl="https://github.com/Jac21/reponotesreact"
      username="Jac21"
    />
  ));
