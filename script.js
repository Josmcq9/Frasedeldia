document.addEventListener('DOMContentLoaded', function() {
    const fraseElement = document.getElementById('frase');
    const autorElement = document.getElementById('autor');

    // Constante con la lista de frases (¡Añade o modifica aquí tus frases!)
    const frases = [
        { frase: "El único modo de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
        { frase: "Cree que puede y ya estará a mitad de camino.", autor: "Theodore Roosevelt" },
        { frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt" },
        { frase: "No cuentes los días, haz que los días cuenten.", autor: "Muhammad Ali" },
        { frase: "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.", autor: "Charles R. Swindoll" },
        { frase: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", autor: "Albert Schweitzer" },
        { frase: "Sé el cambio que quieres ver en el mundo.", autor: "Mahatma Gandhi" },
        { frase: "La única manera de hacer un trabajo genial es amar lo que haces.", autor: "Steve Jobs" },
        { frase: "El optimismo es la fe que conduce al logro. Nada puede hacerse sin esperanza y confianza.", autor: "Helen Keller" },
        { frase: "La mejor manera de predecir el futuro es crearlo.", autor: "Peter Drucker" },
        { frase: "No importa lo lento que vayas, siempre y cuando no te detengas.", autor: "Confucio" },
        { frase: "El único límite es el que te pones tú mismo.", autor: "" },
        { frase: "Cada día es una nueva oportunidad para cambiar tu vida.", autor: "" },
        { frase: "Nunca es demasiado tarde para ser quien podrías haber sido.", autor: "" },
        { frase: "Hoy es un buen día para tener un gran día.", autor: "" },
        { frase: "Pequeños pasos llevan a grandes cambios.", autor: "" },
        { frase: "Confía en ti mismo, sabes más de lo que crees saber.", autor: "Benjamin Spock" },
        { frase: "Si puedes soñarlo, puedes lograrlo.", autor: "Zig Ziglar" },
        { frase: "La motivación es lo que te pone en marcha, el hábito es lo que te hace seguir.", autor: "Jim Ryun" },
        { frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", autor: "" },
        { frase: "Cree en ti mismo y todo será posible.", autor: "" },
        { frase: "La actitud es una pequeña cosa que hace una gran diferencia.", autor: "Winston Churchill" },
        { frase: "La perseverancia es la clave del éxito.", autor: "" },
        { frase: "El trabajo en equipo hace el sueño funcionar.", autor: "" },
        { frase: "Juntos logramos más.", autor: "" },
        { frase: "Somos un equipo, el éxito de uno es el éxito de todos.", autor: "" },
        { frase: "El mejor proyecto en el que trabajar eres tú.", autor: "" },
        { frase: "Haz hoy lo que otros no quieren, para mañana vivir como otros no pueden.", autor: "" },
        { frase: "Cree en la magia de los nuevos comienzos.", autor: "" },
        { frase: "Cada amanecer trae una nueva oportunidad.", autor: "" },
        { frase: "Agradece lo que tienes mientras persigues lo que quieres.", autor: "" },
        { frase: "Lo único imposible es aquello que no intentas.", autor: "" },
        { frase: "La vida comienza al final de tu zona de confort.", autor: "" },
        { frase: "A veces ganas, a veces aprendes.", autor: "" },
        { frase: "Si no te desafía, no te cambia.", autor: "" },
        { frase: "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.", autor: "Winston Churchill" },
        { frase: "La mente es todo. Lo que piensas, te conviertes.", autor: "Buda" },
        { frase: "El único modo de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
        { frase: "La felicidad no es algo hecho. Viene de tus propias acciones.", autor: "Dalai Lama" },
        { frase: "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.", autor: "Jack Canfield" },
        { frase: "Si quieres algo que nunca has tenido, tienes que hacer algo que nunca has hecho.", autor: "" },
        { frase: "Sé valiente para vivir la vida en tus propios términos.", autor: "" },
        { frase: "La vida es demasiado corta para preocupaciones, aprovéchala y se feliz.", autor: "" },
        { frase: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de alguien más.", autor: "Steve Jobs" },
        { frase: "La mejor venganza es el éxito masivo.", autor: "Frank Sinatra" },
        { frase: "El éxito es aprender a ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
        { frase: "Cada logro comienza con la decisión de intentarlo.", autor: "" },
        { frase: "Da siempre lo mejor de ti, y lo mejor vendrá.", autor: "" },
        { frase: "El secreto para salir adelante es comenzar.", autor: "Mark Twain" },
        { frase: "Si tienes un sueño, lucha por él.", autor: "" },
        { frase: "No esperes el momento perfecto, toma el momento y hazlo perfecto.", autor: "" },
        { frase: "La inspiración existe, pero tiene que encontrarte trabajando.", autor: "Pablo Picasso" },
        { frase: "Da el primer paso con fe. No tienes que ver toda la escalera, solo da el primer paso.", autor: "Martin Luther King Jr." },
        { frase: "No te compares con los demás. Compárate con la persona que eras ayer.", autor: "" },
        { frase: "Si crees que puedes, ya estás a medio camino.", autor: "" },
        { frase: "No importa cuán lento vayas, siempre y cuando no te detengas.", autor: "" },
        { frase: "El éxito es la capacidad de ir de un fracaso a otro sin perder el entusiasmo.", autor: "" },
        { frase: "La única forma de hacer un gran trabajo es amar lo que haces.", autor: "" },
        { frase: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.", autor: "" },
        { frase: "No esperes, el momento nunca será el adecuado.", autor: "" },
        { frase: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.", autor: "" },
        { frase: "La vida es corta, sonríe mientras aún tienes dientes.", autor: "" },
        { frase: "Trabaja duro en silencio, deja que tu éxito haga ruido.", autor: "" },
        { frase: "Los sueños no funcionan a menos que tú lo hagas.", autor: "" },
        { frase: "Hoy es tu oportunidad de construir el mañana que deseas.", autor: "" },
        { frase: "Sé tú, el resto de los roles ya están cogidos.", autor: "" },
        { frase: "El éxito no es la ausencia de fracaso, es la persistencia a pesar del fracaso.", autor: "" },
        { frase: "Cree en ti mismo, incluso cuando nadie más lo haga.", autor: "" },
        { frase: "No te detengas hasta que te sientas orgulloso.", autor: "" },
        { frase: "El mejor antídoto contra el estrés es la acción.", autor: "" },
        { frase: "No tengas miedo de renunciar a lo bueno para ir a por lo grandioso.", autor: "" },
        { frase: "Tu única limitación es la que te pones tú mismo.", autor: "" },
        { frase: "El éxito es la mejor venganza.", autor: "" },
        { frase: "La vida es demasiado importante para ser tomada en serio.", autor: "Oscar Wilde" },
        { frase: "Si la oportunidad no llama, construye una puerta.", autor: "Milton Berle" },
        { frase: "El camino al éxito está siempre en construcción.", autor: "Lily Tomlin" },
        { frase: "La única manera de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
        { frase: "Cree que puedes y ya estarás a mitad de camino.", autor: "Theodore Roosevelt" },
        { frase: "No cuentes los días, haz que los días cuenten.", autor: "Muhammad Ali" },
        { frase: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", autor: "Albert Schweitzer" },
        { frase: "Sé el cambio que quieres ver en el mundo.", autor: "Mahatma Gandhi" },
        { frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt" },
        { frase: "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.", autor: "Charles R. Swindoll" },
        { frase: "No importa lo lento que vayas, siempre y cuando no te detengas.", autor: "Confucio" },
        { frase: "El único límite es el que te pones tú mismo.", autor: "" },
        { frase: "Cada día es una nueva oportunidad para cambiar tu vida.", autor: "" },
        { frase: "Nunca es demasiado tarde para ser quien podrías haber sido.", autor: "" },
        { frase: "Hoy es un buen día para tener un gran día.", autor: "" },
        { frase: "Pequeños pasos llevan a grandes cambios.", autor: "" },
        { frase: "Confía en ti mismo, sabes más de lo que crees saber.", autor: "Benjamin Spock" },
        { frase: "Si puedes soñarlo, puedes lograrlo.", autor: "Zig Ziglar" },
        { frase: "La motivación es lo que te pone en marcha, el hábito es lo que te hace seguir.", autor: "Jim Ryun" },
        { frase: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", autor: "" },
        { frase: "Cree en ti mismo y todo será posible.", autor: "" },
        { frase: "La actitud es una pequeña cosa que hace una gran diferencia.", autor: "Winston Churchill" },
        { frase: "La perseverancia es la clave del éxito.", autor: "" },
        { frase: "El trabajo en equipo hace el sueño funcionar.", autor: "" },
        { frase: "Juntos logramos más.", autor: "" },
        { frase: "Somos un equipo, el éxito de uno es el éxito de todos.", autor: "" },
        { frase: "El mejor proyecto en el que trabajar eres tú.", autor: "" },
        { frase: "Haz hoy lo que otros no quieren, para mañana vivir como otros no pueden.", autor: "" },
        { frase: "Cree en la magia de los nuevos comienzos.", autor: "" },
        { frase: "Cada amanecer trae una nueva oportunidad.", autor: "" },
        { frase: "Agradece lo que tienes mientras persigues lo que quieres.", autor: "" },
        { frase: "Lo único imposible es aquello que no intentas.", autor: "" },
        { frase: "La vida comienza al final de tu zona de confort.", autor: "" },
        { frase: "A veces ganas, a veces aprendes.", autor: "" },
        { frase: "Si no te desafía, no te cambia.", autor: "Winston Churchill" },
        { frase: "La mente es todo. Lo que piensas, te conviertes.", autor: "Buda" },
        { frase: "El único modo de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
        { frase: "La felicidad no es algo hecho. Viene de tus propias acciones.", autor: "Dalai Lama" },
        { frase: "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.", autor: "Jack Canfield" },
        { frase: "Si quieres algo que nunca has tenido, tienes que hacer algo que nunca has hecho.", autor: "" },
        { frase: "Sé valiente para vivir la vida en tus propios términos.", autor: "" },
        { frase: "La vida es demasiado corta para preocupaciones, aprovéchala y se feliz.", autor: "" },
        { frase: "Tu tiempo es limitado, no lo desperdicies viviendo la vida de alguien más.", autor: "Steve Jobs" },
        { frase: "La mejor venganza es el éxito masivo.", autor: "Frank Sinatra" },
        { frase: "El éxito es aprender a ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" },
        { frase: "Cada logro comienza con la decisión de intentarlo.", autor: "" },
        { frase: "Da siempre lo mejor de ti, y lo mejor vendrá.", autor: "" },
        { frase: "El secreto para salir adelante es comenzar.", autor: "Mark Twain" },
        { frase: "Si tienes un sueño, lucha por él.", autor: "" },
        { frase: "No esperes el momento perfecto, toma el momento y hazlo perfecto.", autor: "" },
        { frase: "La inspiración existe, pero tiene que encontrarte trabajando.", autor: "Pablo Picasso" },
        { frase: "Da el primer paso con fe. No tienes que ver toda la escalera, solo da el primer paso.", autor: "Martin Luther King Jr." },
        { frase: "No te compares con los demás. Compárate con la persona que eras ayer.", autor: "" },
        { frase: "Si crees que puedes, ya estás a medio camino.", autor: "" },
        { frase: "No importa cuán lento vayas, siempre y cuando no te detengas.", autor: "" },
        { frase: "El éxito es la capacidad de ir de un fracaso a otro sin perder el entusiasmo.", autor: "" },
        { frase: "La única forma de hacer un gran trabajo es amar lo que haces.", autor: "" },
        { frase: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.", autor: "" },
        { frase: "No esperes, el momento nunca será el adecuado.", autor: "" },
        { frase: "El mejor momento para plantar un árbol fue hace 20 años. El segundo mejor momento es ahora.", autor: "" },
        { frase: "La vida es corta, sonríe mientras aún tienes dientes.", autor: "" },
        { frase: "Trabaja duro en silencio, deja que tu éxito haga ruido.", autor: "" },
        { frase: "Los sueños no funcionan a menos que tú lo hagas.", autor: "" },
        { frase: "Hoy es tu oportunidad de construir el mañana que deseas.", autor: "" },
        { frase: "Sé tú, el resto de los roles ya están cogidos.", autor: "" },
        { frase: "El éxito no es la ausencia de fracaso, es la persistencia a pesar del fracaso.", autor: "" },
        { frase: "Cree en ti mismo, incluso cuando nadie más lo haga.", autor: "" },
        { frase: "No te detengas hasta que te sientas orgulloso.", autor: "" },
        { frase: "El mejor antídoto contra el estrés es la acción.", autor: "" },
        { frase: "No tengas miedo de renunciar a lo bueno para ir a por lo grandioso.", autor: "" },
        { frase: "Tu única limitación es la que te pones tú mismo.", autor: "" },
        { frase: "El éxito es la mejor venganza.", autor: "" },
        { frase: "La vida es demasiado importante para ser tomada en serio.", autor: "Oscar Wilde" },
        { frase: "Si la oportunidad no llama, construye una puerta.", autor: "Milton Berle" },
        { frase: "El camino al éxito está siempre en construcción.", autor: "Lily Tomlin" },
        { frase: "La única manera de hacer un gran trabajo es amar lo que haces.", autor: "Steve Jobs" },
        { frase: "Cree que puedes y ya estarás a mitad de camino.", autor: "Theodore Roosevelt" },
        { frase: "No cuentes los días, haz que los días cuenten.", autor: "Muhammad Ali" },
        { frase: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.", autor: "Albert Schweitzer" },
        { frase: "Sé el cambio que quieres ver en el mundo.", autor: "Mahatma Gandhi" },
        { frase: "El futuro pertenece a quienes creen en la belleza de sus sueños.", autor: "Eleanor Roosevelt" },
        { frase: "La vida es 10% lo que te sucede y 90% cómo reaccionas a ello.", autor: "Charles R. Swindoll" },
        { frase: "No importa lo lento que vayas, siempre y cuando no te detengas.", autor: "Confucio" },
        { frase: "El único límite es el que te pones tú mismo.", autor: "" },
        { frase: "Cada día es una nueva oportunidad para cambiar tu vida.", autor: "" },
        { frase: "Nunca es demasiado tarde para ser quien podrías haber sido.", autor: "" },
        { frase: "Hoy es un buen día para tener un gran día.", autor: "" },
        { frase: "Pequeños pasos llevan a grandes cambios.", autor: "" }
    ];

    // Función para obtener la frase del día
    function obtenerFraseDelDia() {
        // Obtener el número del día del año
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Usar el día del año como índice para obtener la frase (usando el módulo para evitar errores de índice)
        const index = dayOfYear % frases.length;
        return frases[index];
    }

    // Función para mostrar la frase en la página
    function mostrarFraseDelDia() {
        const { frase, autor } = obtenerFraseDelDia();
        fraseElement.textContent = `"` + frase + `"`;
        autorElement.textContent = autor;
    }

    mostrarFraseDelDia();
});