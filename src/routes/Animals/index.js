import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { animalsSelectors, getRandomAnimals } from "../../store/animals";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { Figure } from "../../components/Figure";
import { Button } from "@material-ui/core";

export const Animals = () => {
   const data = useSelector(animalsSelectors.getData);
   const isError = useSelector(animalsSelectors.getError);
   const isLoading = useSelector(animalsSelectors.getLoading);
   const dispatch = useDispatch();

   const getData = () => {
      dispatch(getRandomAnimals);
   }

   useEffect(() => {
      dispatch(getRandomAnimals);
   }, [dispatch]);

   return (
      <div>
         <h1>Homework</h1>
         {
            !isError &&
            <Button onClick={getData} disabled={isLoading}>
               reload
            </Button>
         }
         {
            isError && (
               <Error
                  reload={getData}
               />
         )}
         {
            isLoading && <Loader />
         }
         {
            !isLoading && data && <Figure {...data} />}
      </div>
   );
};