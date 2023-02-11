import { Layout } from 'components/Layout/Layout';
import { AppBar } from "./AppBar/AppBar";
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskList/>
    </Layout>
  );
};
