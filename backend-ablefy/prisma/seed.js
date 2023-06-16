const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

const dataNumbers = {
  songs: [6, 4, 5, 5, 3],
};

async function main() {
  console.log(`🌱 Start seeding ...`);

  dataNumbers.songs.forEach(async (numberOfSongs) => {
    const newArtist = await prisma.artist.create({
      data: {
        name: faker.name.firstName(),
      },
    });

    const newAlbum = await prisma.album.create({
      data: {
        title: faker.lorem.paragraph(),
        artist: { connect: { id: newArtist.id } },
      },
    });

    [...Array(numberOfSongs)].forEach(async () => {
      await prisma.song.create({
        data: {
          title: faker.hacker.noun(),
          duration: faker.datatype.number(),
          playbacks: faker.datatype.number(),
          artist: { connect: { id: newArtist.id } },
          album: { connect: { id: newAlbum.id } },
        },
      });
    });
  });

  console.log("✅ Seeding finished.");
}

main()
  .catch((e) => {
    console.log("🔴 Seeding failed");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = main;
