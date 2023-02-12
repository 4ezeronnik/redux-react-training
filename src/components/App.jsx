import { Layout } from 'components/Layout/Layout';
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList/>
    </Layout>
  );
};
