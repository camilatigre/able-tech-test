const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const ArtistService = {
  findAll: async (name) => {
    try {
      const condition = name
        ? { where: { name: { contains: name, mode: "insensitive" } } }
        : {};

      const data = await prisma.artist.findMany(condition);
      return data;
    } catch (error) {
      throw new Error("Some error occurred while retrieving artists.");
    }
  },
  findOne: async (id) => {
    try {
      const data = await prisma.artist.findUnique({ where: { id: Number(id) } });

      return data;
    } catch (error) {
      throw new Error("Error retrieving Artist with id=" + id);
    }
  },
  getTopThree: async () => {
    try {
      const data = await prisma.artist.findMany({
        take: 3,
        where: { id },
        include: {
            songs: true,
        }
      });

      console.log({
        id: data.id,
        name: data.name,
        totalPlaybacks: 0
      })

      console.log(data.songs)
      
      return data;
    } catch (error) {
        console.log('error', error)
      throw new Error("Some error occurred while retrieving artists.");
    }
  },
};

module.exports = ArtistService;