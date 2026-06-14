import logger from "../config/logger";
import { createHotelDto } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/errors/app.error";
import Hotel from "./../db/models/hotel";

export async function createHotel(hotelData: createHotelDto) {
  const hotel = await Hotel.create({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    rating_count: hotelData.rating_count,
  });
  logger.info(`hotel created:${hotel.id}`);
  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);
  if (!hotel) {
    logger.error(`Hotel not found ${id}`);
    throw new NotFoundError("Hotel not found");
  }
  logger.info(`Hotel found:${hotel.id}`);
  return hotel;
}
