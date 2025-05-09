import Card from './components/Card';
import styles from './MeetingsAndEvents.module.css';

const cardsData = [
  {
    title: 'Event Planning',
    description:
      'description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg asdas description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg',
    links: [{ url: '/contact', label: 'START PLANNING >>>' }],
    isList: false,
  },
  {
    title: 'Weddings',
    description:
      'description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg asdas description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg',
    links: [{ url: '/contact', label: 'REQUEST FOR PROPOSAL >>>' }],
    isList: false,
  },
  {
    title: 'Catering',
    description:
      'description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg asdas description aqui mi bro asdasd dsfsd yatusabe que soy hijo e la nmoche hijo c la nosdfsdk jskdfj ksdfsdf sdf fsdgdfg dfg dfg dfg',
    links: [
      { url: '/files/resource1.pdf', label: 'Resource 1' },
      { url: '/files/resource2.pdf', label: 'Resource 2' },
      { url: '/files/resource1.pdf', label: 'Resource 3' },
      { url: '/files/resource2.pdf', label: 'Resource 4' },
    ],
    isList: true,
  },
];

const MeetingEventsPage = () => {
  return ( 
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.firstElement}>
          <span className={styles.word}>MEETINGS</span>
          <span className={styles.word}>& EVENTS</span>
        </div>
        <div className={styles.secondElement}>
          <img
            src="/meeting.webp"
            alt="meeting image"
            loading="lazy"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.lowSection}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            links={card.links}
            isList={card.isList}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetingEventsPage;
