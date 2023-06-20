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
      const artists = await prisma.artist.findMany({
        take: 3,
        include: {
          songs: {
            select: {
              playbacks: true,
            },
          },
        },
      });

      const artistsWithTotalPlaybacks = artists.map((artist) => {
        const totalPlaybacks = artist.songs.reduce(
          (sum, song) => sum + song.playbacks,
          0
        );

        return {
          id: artist.id,
          name: artist.name,
          totalPlaybacks,
        };
      });

      const sortedArtists = artistsWithTotalPlaybacks.sort(
        (a, b) => b.totalPlaybacks - a.totalPlaybacks
      );

      return sortedArtists;
    } catch (error) {
      throw new Error("Some error occurred while retrieving artists.");
    }
  },
};

module.exports = ArtistService;