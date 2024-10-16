import { Header } from './components/Header/Header';
import { Content } from './components/Content/Content';
import { useState, useEffect } from 'react';
import { getData, IData } from './api/getData';
import './App.scss';
import { Modal } from './components/Modal/Modal';

function App() {
  const [timeLeft, setTimeLeft] = useState(20);
  const [discount, setDiscount] = useState(true);
  const [isPriceRed, setIsPriceRed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else {
      setDiscount(false);
      setWidgets(data.filter((elem) => !elem.isPopular && !elem.isDiscount));
      openModal();
    }
  }, [timeLeft]);

  useEffect(() => {
    setIsPriceRed(timeLeft <= 10);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 5) {
      setIsCheckboxChecked(true);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const [data, setData] = useState<IData[]>([]);
  const [widgets, setWidgets] = useState<IData[]>([]);
  const [discountedWidgets, setDiscountedWidgets] = useState<IData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setWidgets(data.filter((elem) => elem.isPopular));
    setDiscountedWidgets(data.filter((elem) => elem.isDiscount));
  }, [data]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header seconds={seconds} minutes={minutes} isPriceRed={isPriceRed} />
      <Content widgets={widgets} discount={discount} isCheckboxChecked={isCheckboxChecked} />
      {isModalOpen && <Modal onClose={closeModal} widgets={discountedWidgets} discount={false} />}
    </>
  );
}

export default App;