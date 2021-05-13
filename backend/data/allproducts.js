const allproducts = [
    {

      name: 'Pink Mirror Glaze Cake',
      image: '/images/MirrorCake.png',
      description:
        'Cake composed with 4 layers: White chocolate mousse,fruit jelly layer,Raspberry Mousse with a genoise cake base covered with a Pink Mirror Glaze .This cake is customizable. You may choose any flavour of fruit and/or any type of chocolate ',
      brand: 'Apple',
      category: 'Cakes',
      price: 25.00,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {

      name: 'Cupcakes Fruits Rouges',
      image: '/images/FruitRougesCupcake.png',
      description:
        'Vanilla Sponge cupcake with vanilla cream icing topped with fresh berries ',
      brand: 'Apple',
      category: 'Cupcakes',
      price: 2.5,
      countInStock: 7,
      rating: 4.0,
      numReviews: 8,
    },
    {

      name: 'Purple Meringue Drip Cake',
      image: '/images/MeringueCake3Layers.png',
      description:
        'This is a 3 layer birthday cake : Vanilla Sponge cake with swiss buttercream icing ,white chocolate drip with colored macarons and meringue. Cake is customizable (Blueberry, Strawberry,Raspberry). ',
      brand: 'Cannon',
      category: 'Cakes',
      price: 30.00,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {

      name: 'Vanilla cake covered with fruit ganache',
      image: '/images/WhiteChocolateRedFruitsGanacheCake.png',
      description:
        'The perfect cake for sunday afternoon. This cake is a one layer vanilla cake with blueberries covered with a delicious red fruit ganache',
      brand: 'Sony',
      category: 'Cakes',
      price: 15.00,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    {

      name: 'Chocolate Maltezer Cake',
      image: '/images/ChocolateMaltezerCake.png',
      description:
        'Get yourself a delicious chocolate cake for your birthday!  This cake is composed of 4 layer brownie type cake with swiss meringue buttercream. Decorated with chocolate ganache and maltezer',
      category: 'Cakes',
      price: 40.00,
      countInStock: 7,
      rating: 3.5,
      numReviews: 10,
    },
    {

      name: "Mother's day Floral Cake",
      image: '/images/CheckeredCake.png',
      description:
        'A beautifull cake for mothers day. This is a 2 layer Vanilla chiffon Cake with swiss meringue butter cream covered pink flower decoration',
      brand: 'Amazon', 
      category: 'Cakes',
      price: 25.00,
      countInStock: 0,
      rating: 4,
      numReviews: 12,
    },
    {

        name: 'Christmas Eve Mirror Glazed cake',
        image: '/images/MirrorCakeRed.png',
        description:
          'This is a customizable cake. Lika a bavarois ,it has a raspberry layer and fruit jelly white chocolate mousse layer with genoise cake base. Not too sweet',
        brand: 'Amazon',
        category: 'Cakes',
        price: 25.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Pink Floral Vanilla cake',
        image: '/images/PinkCake.png',
        description:
          '2 layer Vanilla sponge cake with floral design',
        brand: 'Cakes',
        category: 'Cakes',
        price: 25.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Pink drip cake',
        image: '/images/PinkDripCake.png',
        description:
          '3 layer customizable cake flavour (Vanilla,Strawberry,Chocolate) with swiss meringue buttercream and white chocolate drip ganache',
        brand: 'Amazon',
        category: 'Cakes',
        price: 30.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Design Pattern Cake',
        image: '/images/SwissButtercreamCake.png',
        description:
          '3 layer customizable cake flavour (Vanilla,Strawberry,Chocolate) with swiss meringue buttercream and white chocolate drip ganache',
        brand: 'Amazon',
        category: 'Cakes',
        price: 30.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Small Chocolate Drip Cake with Fresh berries',
        image: '/images/WeddingCake.png',
        description:
          'This small wedding cake is a 2 Level - 4 layer cake <br> Customizable flavour (Red velvet , Vanilla Sponge , Chocolate).<br> This cake serves up to 25 people.',
        brand: 'Cakes',
        category: 'Cakes',
        price: 50.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'White Wedding cake',
        image: '/images/WhiteWeddingCake.png',
        description:
          '2Tier - 6 layer cake - Vanilla Sponge Cake with swissbuttercream icing',
        brand: 'Amazon',
        category: 'Cakes',
        price: 70.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Sunflower Cake',
        image: '/images/SunflowerCake.png',
        description:
          '2 layer cake Customizable flavour (Red velvet , Vanilla Sponge , Chocolate).',
        brand: 'Amazon',
        category: 'Cakes',
        price: 25.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Baby Blue Icing Cake',
        image: '/images/3LayerSmallBirthdayCake.png',
        description:
          '3 Layer Customizable flavour Cake (Red velvet , Vanilla Sponge , Chocolate).<br> This cake serves up to 20 people.',
        brand: 'Amazon',
        category: 'Cakes',
        price: 30.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Emoji Cake',
        image: '/images/EmojiCake.png',
        description:
          'Any Emoji face can be made on 1 or 2 layer cake with red velvet , vanilla sponge cake or chocolate cake',
        brand: 'Amazon',
        category: 'Cakes',
        price: 15.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: '2 Tier Pink Flower cake',
        image: '/images/2LevelCake.png',
        description:
          '2Tier - 6 layer cake - Customizable flavour Cake (Red velvet , Vanilla Sponge , Chocolate) with swissbuttercream icing',
        brand: 'Amazon',
        category: 'Cakes',
        price: 70.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: "Mother's Day Pink Cake",
        image: '/images/2LayerPinkBirthdayCake.png',
        description:
          '2 layer cake Customizable flavour (Red velvet , Vanilla Sponge , Chocolate).',
        brand: 'Amazon',
        category: 'Cakes',
        price: 25.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: "Kid's Birthday Chocolate cake",
        image: '/images/ChocoPartyCake.png',
        description:
          "Chocolate brownie type cake with Chocolate ganache and Chocolate melt & M&M's",
        brand: 'Amazon',
        category: 'Cakes',
        price: 25.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Chocolate Birthday Cake',
        image: '/images/ChocolateBirthdayCake.png',
        description:
          '4 Layers of Chocolate Brownie cake filled with chocolate ganache ',
        brand: 'Amazon',
        category: 'Cakes',
        price: 45.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

        name: 'Vanilla Cupcake',
        image: '/Cupcakes/VanillaCupcake.jpg',
        description:
          'Soft and fluffy vanilla cupcake with vanilla Cream Icing and sprinkles',
        brand: 'Apple',
        category: 'Cupcakes',
        price: 1.70,
        countInStock: 10,
        rating: 4.5,
        numReviews: 12,
      },
      {
 
        name: 'Red Velvet Cupcake',
        image: '/Cupcakes/RedVelvetCupcake.jpg',
        description:
          'Red Velvet recipe with cream icing and Red Velvet Sprinkles',
        brand: 'Apple',
        category: 'Cupcakes',
        price: 1.70,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
      },
      {

        name: 'Chocolate & Oreo Cupcake',
        image: '/Cupcakes/OreoCupcakes.jpg',
        description:
          'Moist Hershey chocolate recipe with oreo cream icing and an oreo',
        brand: 'Cannon',
        category: 'Cupcakes',
        price: 2.20,
        countInStock: 5,
        rating: 3,
        numReviews: 12,
      },
      {

        name: 'RedVelvet Strawberry & Cream Cupcake',
        image: '/Cupcakes/StrawberryCupcake.jpg',
        description:
          'Best seller strawberry cupcake . Can be a plain vanilla base with strawberry goo or Red Velvet for a red effect',
        brand: 'Sony',
        category: 'Cupcakes',
        price: 2.20,
        countInStock: 11,
        rating: 5,
        numReviews: 12,
      },
      {

        name: 'Lemon Cupcake',
        image: '/Cupcakes/LemonCupcake.jpg',
        description:
          'Lemony cupcake filled with lemon curd topped with cream icing and lemon piece',
        brand: 'Logitech',
        category: 'Cupcakes',
        price: 2.20,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
      },
      {

        name: 'Double Chocolate Cupcake',
        image: '/Cupcakes/DoubleChocolateCupcake.jpg',
        description:
          'Moist Hershey Chocolate recipe for the cupcake with chocolate icing topped with chocolate sprinkles',
        brand: 'Amazon',
        category: 'Cupcakes',
        price: 2.00,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
      },
      {

          name: 'Raspberry Cupcake',
          image: '/Cupcakes/RaspberryCupcake.jpg',
          description:
            'Vanilla cupcake with real raspberries inside topped with raspberry flavour icing cream and a rasberry',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.20,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Caramel Cupcake',
          image: '/Cupcakes/CaramelCupcakes.jpg',
          description:
          'This is a brown sugar cupcake topped with cream icing and caramel drizzle',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Blueberry Cupcake',
          image: '/Cupcakes/BlueberryCupcake.jpg',
          description:
            'This is a Blueberry cupcake with real fruits inside and purple icing topped with berries',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.20,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Speculoos Cupcake',
          image: '/Cupcakes/SpeculoosCupcake.jpg',
          description:
            'Caramel cupcake with speculoos flavored icing topped with speculoos biscuit',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Cuberdon Cupcake',
          image: 'Cupcakes/cupcake-1.jpeg',
          description:
            'Raspberry cupcake with raspberry icing topped with Sweet Red Cuberdon',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Chocolate Mokka Cupcake',
          image: '/Cupcakes/MokaCupcake.jpg',
          description:
            'Like the taste of coffee in a cupcake ? then this cupcake is for you! Moist Chocolate cupcake with mokka buttercream ',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Emoji Cupcake',
          image: '/Cupcakes/EmojiCupcake.jpg',
          description:
            'Moist Vanilla cupcake topped with Emoji Fondant to impress your guest',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Rafaelo Cupcake',
          image: '/Cupcakes/RaffaelloCupcakes.jpg',
          description:
            'Taste our moist coconut cupcake topped with icing,coconut flakes and a Raffaello',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'PeanutButter Banana Cupcake',
          image: '/Cupcakes/PeanutButterBananaCupcake.jpg',
          description:
            'Sweet peanut butter cupcake topped with Banana icing and Caramel pieces',
          brand: 'SweetAmbition',
          category: 'Cupcakes',
          price: 2.20,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Carrot Cupcake',
          image: '/Cupcakes/CarrotCupcakes.jpg',
          description:
            'Carrot cake base with cream cheese frosting',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 1.70,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {

          name: 'Mango Cupcake',
          image: '/Cupcakes/TropicalMangoCupcake.jpg',
          description:
            'Delicious Vanilla Cupcake filled with mango puree topped with mango icing',
          brand: 'Amazon',
          category: 'Cupcakes',
          price: 2.20,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
        {
          name: 'Ube Macapuno Cupcake',
          image: '/Cupcakes/UbeMacapunoCupcake.jpg',
          description:
            'Taste our filipino flavoured ube cupcake with ube icing ,topped with Coconut strings',
          category: 'Cupcakes',
          price: 2.00,
          countInStock: 0,
          rating: 4,
          numReviews: 12,
        },
  ]
  
module.exports=allproducts