const { PrismaClient } = require('@prisma/client')
const prompt = require('prompt-sync')();
const prisma = new PrismaClient()


let name = prompt("Please enter your name: ")
let email = prompt("Please enter an email: ")
let password = prompt("Please enter a password: ")
let profile = prompt("Tell me something about you: ")
let posts = prompt("Give me a goold ol post: ")

async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.user.create({
        data: {
            name: `${name}`,
            email: `${email}`,
            password: `${password}`,
            posts: {
                create: { title: `${posts}` },
            },
            profile: {
                create: { bio: `${profile}` },
            },
        },
    })

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })

    console.dir(allUsers, { depth: null })

    //   const post = await prisma.post.update({
    //     where: { id: 1 },
    //     data: { published: true },
    //   })

    //   console.log(post)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
})
