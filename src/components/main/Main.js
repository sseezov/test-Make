import '../../styles/Main.scss'


function Main() {
  return (
    <div className='main'>
      <div className='heading-block'>
        <h1 className='heading-block__heading'>Тестовое задание</h1>
        <p className='lead-text'>Уровень: junior</p>
      </div>
      <div className='description-block'>
        Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее. В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну что, поехали?
      </div>
      <div className='grid-block'>
        Сетка
        Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая» — переменной ширины.
        Десктоп (1200+)
      </div>
      <div className='main__typo'></div>
      <div className='main__ui'></div>
      <div className='main__accordion'></div>
    </div>
  );
}

export default Main;