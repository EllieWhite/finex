import ItemList from '../itemList/itemList';
import Rocket from '../../assets/rocket.svg';
import Calendar from '../../assets/calendar.svg';
import Circle from '../../assets/circle.svg';
import Ribbon from '../../assets/ribbon.svg';

const Join = () => {
    const itemsJoin = [
        { id: 1, img: `${Rocket}`, hover_fade: true, title: 'Профессиональ\xADный рост', text: 'Мы верим, что\u00A0каждый сотрудник обладает потенциалом для\u00A0роста. Мы\u00A0предлагаем четкие траектории развития, систему оценки компетенций и\u00A0индивидуальные планы обучения, чтобы помочь вам\u00A0реализовать свой потенциал.' },
        { id: 2, img: `${Calendar}`, hover_fade: true, title: 'Гибридный формат работы', text: 'Мы поддерживаем связь и\u00A0взаимодействие, независимо от\u00A0вашего местоположения! Используйте современные инструменты коммуникации, участвуйте в\u00A0командных мероприятиях и\u00A0оставайтесь на\u00A0связи с\u00A0коллегами в\u00A0любом формате работы.' },
        { id: 3, img: `${Circle}`, hover_fade: true, title: 'Всесторонняя адаптация на старте', text: 'Мы поможем вам\u00A0быстро освоиться! Вас ждет программа адаптации, включающая обучение, наставничество и\u00A0поддержку от\u00A0команды. Мы\u00A0сделаем все, чтобы ваш старт был максимально комфортным и\u00A0успешным.'},
        { id: 4, img: `${Ribbon}`, hover_fade: true, title: 'Забота о\u00A0здоровье и\u00A0благополучии', text: 'Мы заботимся о\u00A0вашем балансе между работой и\u00A0личной жизнью! Мы\u00A0предлагаем гибкий график работы, дополнительные дни\u00A0отпуска и\u00A0программы поддержки сотрудников, чтобы вы\u00A0могли полноценно отдыхать и\u00A0восстанавливать силы.'}
    ];

    return (
        <div className="t-vetrical">
            <h2 className="title-2">Присоединяйся к команде FINEX</h2>
            <div className="t-vertical-small">
                <ItemList items={itemsJoin} hasCol3={true}/>
            </div>
        </div>
    );
};

export default Join;

