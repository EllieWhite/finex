import ItemList from '../itemList/itemList';
import Building from '../../assets/building.svg';
import Calculate from '../../assets/calculate.svg';
import Cash from '../../assets/cash.svg';
import Handshake from '../../assets/handshake.svg';
import Lightning from '../../assets/lightning.svg';
import Setting from '../../assets/setting.svg';


const About = () => {
    
    const itemsAbout = [
        { id: 1, img: `${Cash}`, hover_up: true, title: '70 миллионов частных инвесторов', text: 'Нас выбирают 70 миллионов инвесторов, что свидетельствует о надежности и популярности нашей платформы.' },
        { id: 2, img: `${Building}`, hover_up: true, title: '47 лет на финансовом рынке', text: 'Наш многолетний опыт на финансовых рынках обеспечивает вам надежность и глубокое понимание.' },
        { id: 3, img: `${Lightning}`, hover_up: true, title: '0.00001 секунды время реакции системы', text: 'Наша система реагирует за 0.00001 секунды, давая вам преимущество в динамичной торговле.'},
        { id: 4, img: `${Setting}`, hover_up: true, title: '2500+ инструментов', text: 'Независимо от ваших предпочтений и опыта, вы найдете подходящие инструменты среди более чем 2500 доступных опций.'},
        { id: 5, img: `${Calculate}`, hover_up: true, title: '3,7 миллионов площадь торгов', text: 'Оцените масштаб нашей торговой платформы с огромными возможностями и высокой ликвидностью.'},
        { id: 6, img: `${Handshake}`, hover_up: true, title: '100% надежность', text: 'Мы обеспечиваем 100% надежность нашей платформы, чтобы вы могли торговать спокойно.'}
    ];

    return (
        <div>
            <ItemList items={itemsAbout} />
        </div>
    );
}

export default About;