const { createClient } = require('@supabase/supabase-js')
const { PrismaClient } = require('@prisma/client')
// const prompt = require('prompt-sync')();
const prisma = new PrismaClient()
require.dotenv()

// Create a single supabase client for interacting with your database
const supabase = createClient(`${DATABASE_URL}`, `${publicAnonKey}`)

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

    // await prisma.user.deleteMany({})
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

// async function signUp() {
//     const { data, error } = await supabase.auth.signUp({
//         email: 'example@email.com',
//         password: 'example-password',
//     })
// }

// async function signIn() {
//     const { data, error } = await supabase.auth.signInWithPassword({
//         email: 'example@email.com',
//         password: 'example-password',
//     })
// }

// async function signOut() {
//     const { error } = await supabase.auth.signOut()
// }