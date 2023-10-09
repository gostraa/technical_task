import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CarInfoModal from 'components/CarInfoModal/CarInfoModal';
import { closeModal, openModal } from 'redux/Modal/ModalSlice';
import { LoadMore, addToFavorite } from 'redux/Advert/advertSlice';
import { getPaginationAdvertThunk } from 'redux/Advert/advertThunks';

const CarsList = () => {
  const adverts = useSelector(state => state.adverts.adverts);
  const isModalOpen = useSelector(state => state.modal.isOpen);
  const [selectedId, setSelectedId] = useState(null);
  const currentPage = useSelector(state => state.adverts.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaginationAdvertThunk(currentPage));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    dispatch(LoadMore(currentPage));
  };

  const handleOpenModal = id => {
    setSelectedId(id);
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleClickToFavorites = advert => {
    dispatch(addToFavorite(advert));
  };

  return (
    <>
      <ul>
        {adverts?.map(advert => (
          <li key={advert.id}>
            <div>
              <button onClick={() => handleClickToFavorites(advert)}>
                to favorite
              </button>
              <img src={advert.img} alt={advert.make} width={274} />
            </div>
            <div>
              <h2>
                {advert.make}
                {advert.model}
              </h2>
              <p>{advert.year}</p>
              <p>{advert.rentalPrice}</p>
            </div>
            <div>
              <p>{advert.address}</p>
              <p>{advert.rentalCompany}</p>
              <p>{advert.type}</p>
              <p>{advert.model}</p>
              <p>{advert.mileage}</p>
              <p>{advert.accessories[1]}</p>
            </div>
            <button onClick={() => handleOpenModal(advert.id)}>
              Learn more
            </button>
          </li>
        ))}
        {currentPage < 5 && <button onClick={handleLoadMore}>Load more</button>}
      </ul>
      {isModalOpen && (
        <CarInfoModal onClose={handleCloseModal} id={selectedId} />
      )}
    </>
  );
};

export default CarsList;
