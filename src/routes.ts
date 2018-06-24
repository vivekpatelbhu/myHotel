import userRoute from './components/user/userRoutes';
import hotelRoutes from './components/hotel/hotelRoutes';
import bookingRoutes from './components/booking/bookingRoutes';
const userString = "/user";
const hotelString = "/hotel";
const bookingString = '/booking';
export default (app: any) => {
        app.use(userString, userRoute);
        app.use(hotelString, hotelRoutes);
        app.use(bookingString, bookingRoutes);
};
