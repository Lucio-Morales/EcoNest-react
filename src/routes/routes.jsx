import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../App';
import HomePage from '../pages/Home';
import ExplorePage from '../pages/Explore';
import AmenitiesPage from '../pages/Amenities';
import MeetingEventsPage from '../pages/MeetingaAndEvents';
import Slider from '../components/Slider';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'explore', element: <ExplorePage /> },
      { path: 'amenities', element: <AmenitiesPage /> },
      { path: 'meetings-events', element: <MeetingEventsPage /> },
    ],
  },
  { path: 'slider', element: <Slider /> },
]);

export default routes;
