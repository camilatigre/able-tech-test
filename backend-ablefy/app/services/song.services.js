const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const SongService = {
  findAll: async (title, page, size) => {
    try {
      const condition = title
        ? { where: { title: { contains: title, mode: "insensitive" } } }
        : {};

      const skip = (page - 1) * size;
      const take = size;

      const data = await prisma.song.findMany({
        ...condition,
        skip,
        take,
      });
      return data;
    } catch (error) {
      throw new Error("Some error occurred while retrieving songs.");
    }
  },
  findOne: async (id) => {
    try {
      const data = await prisma.song.findUnique({
        where: { id: Number(id) },
      });

      return data;
    } catch (error) {
      throw new Error("Error retrieving Song with id=" + id);
    }
  },
  getTopTen: async () => {
    try {
      const data = await prisma.song.findMany({
        take: 10,
        orderBy: {
          playbacks: 'desc',
        },
      });

      return data;
    } catch (error) {
      throw new Error("Some error occurred while retrieving songs.");
    }
  },
};

module.exports = SongService;