const vm= new Vue({
    el: 'main',
    data:{
        laborales: ['lunes','martes','miercoles','jueves','viernes'],
        nuevaTarea: null,
        tareas:[
                'Aprender Vue',
                'Hacer una cosa',
                'Hacer otra',
        ],
        persona:{
            Nombre:'Antonio',
            Ocupacion: 'Programador',
            Ciudad: 'Caracas',
        },
       
    },
     methods: {
            agregarTareas(){
               this.tareas.unshift(this.nuevaTarea);
               this.nuevaTarea = '';
            },
        },
})