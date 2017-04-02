const vm= new Vue({
    el: 'main',
    data:{
        laborales: ['lunes','martes','miercoles','jueves','viernes'],
        tareas:[
            {nombre:'Dormir', prioridad:'Alta'},
            {nombre:'Aprender Vue', prioridad:'Alta'},
            {nombre:'Hacer otra cosa', prioridad:'Baja'},
        ],
        persona:{
            Nombre:'Antonio',
            Ocupacion: 'Programador',
            Ciudad: 'Caracas',
        },
    },
})