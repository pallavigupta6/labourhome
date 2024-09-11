import Sidebar from '../components/sidebar/sidebar';
import SurveyForm from '../components/surveyForm/surveyForm';

const Survey = () => {
  return (
    <main className='flex gap-5 w-[100vw] h-[100vh] bg-gray-800 p-4  '>
      <Sidebar />
      <SurveyForm />
    </main>
  );
};

export default Survey;
