<?php

namespace Console\Support;



class Actions extends ActionHelpers
{

    /**
     * Create new app using command line manager
     * @param $name
     * Boolean response if app is created
     * */
    public function app($name) 
    {

        

    }

    /**
     * Create Controllers using command line manager
     * @param $name, $type
     * Boolean response if controller is created
     * */
    public function controller($name, $flag = null)
    {
        $this->path = $this->path("controller") . $name . ".php";

        if ($this->checkExistent($this->path)) {
            echo "$name already exists";
            return false;
        }

        if ($this->configureController($name, $this->path)) {

            if (isset($this->run_flag) && $this->run_flag) {
                $this->flagHandler($name, $flag, "controller", $this->path);
            }

            return true;
        }

        print("Unable to create controller " . $name);
        return false;
    }

    public function notification($name, $flag = null)
    {
        if (!is_null($flag)) {
            if ($this->flagChecker("notification", $flag)) {
                $this->run_flag = true;
            } else {
                return $this->run_flag = false;
            }
        }

        $path = $this->path("notification") . $name . ".php";

        if ($this->checkExistent($path)) {
            echo "Notification $name already exists";
            exit;
        }

        if ($this->configureNotification($name, $path)) {

            if (isset($this->run_flag) && $this->run_flag) {
                $this->flagHandler($name, $flag, "notification", $path);
            }

            return true;
        }

        print("Unable to create notification " . $name);
        return false;
    }

    public function model($name, $flag = null)
    {
        if (!is_null($flag)) {
            if ($this->flagChecker("model", $flag)) {
                $this->run_flag = true;
            } else {
                return $this->run_flag = false;
            }
        }

        $path = $this->path("model") . $name . ".php";

        if ($this->checkExistent($path)) {
            echo "Model $name already exists";
            exit;
        }

        if ($this->configureModel($name, $path)) {

            if (isset($this->run_flag) && $this->run_flag) {
                $this->flagHandler($name, $flag, "model", $path);
            }

            return true;
        }

        print("Unable to create model " . $name);
        return false;
    }

    public function socket($name, $flag = null)
    {
        if (!is_null($flag)) {
            if ($this->flagChecker("socket", $flag)) {
                $this->run_flag = true;
            } else {
                return $this->run_flag = false;
            }
        }

        $path = "./Sockets/{$name}.php";

        if ($this->checkExistent($path)) {
            echo "$name already exists"; exit;
        }

        if ($this->configureSocket($name, $path)) {

            if (isset($this->run_flag) && $this->run_flag) {
                $this->flagHandler($name, $flag, "socket", $path);
            }

            return true;
        }

        print("Unable to create socket " . $name);
        return false;
    }

    public function migration($name, $flag = null)
    {

        $table = $this->tableFormating($name);

        if($flag == "--alter" || $flag == "--a") 
        {
            $file_name = $table . ".php";
            $component = "migration.alter";
        }
        else 
        {
            $file_name = $table . "_table.php";
            $component = "migration";
        }

        $this->path = $this->path("migration") . time() . "_" . $file_name;
        $this->checkMigrationExistent($file_name);


        if ($this->configureMigration($table, $this->path, $component))
        {

            if (isset($this->run_flag) && $this->run_flag) {
                $this->flagHandler($name, $flag, "migration", $this->path);
            }

            return true;
        }

        print("Unable to create migration " . $name);
        return false;
    }

    public function migrate($flag = null)
    {
        $this->migrationFlagHandler($flag);
        
        if ($this->newMigrationsChecker()) {
            if (!$this->checkTableExists("migrations")) {
                $this->createMigrationsTable();
            }

            $this->runMigrations();

            return true;
        }

        echo "No new migrations";
    }

    public function thirdpartylibrary($state, $flag = null)
    {
        if ($state == true) {
            if ($this->enableThirdPartyLibrary()) {
                return true;
            } else {
                return false;
            }
        } else if ($state == false) {
            if ($this->disableThirdPartyLibrary()) {
                return true;
            } else {
                return false;
            }
        }
    }

    public function websocket($state, $flag = null) {

        if($state == true) {
            $this->enableWebSocket($flag);
        } else {
            $this->disableWebSocket($flag);
        }
    }

    public function seeder($name, $flag = null)
    {

        if (!is_null($flag)) {
            if ($this->flagChecker("seeder", $flag)) {
                $this->run_flag = true;
            } else {
                return $this->run_flag = false;
            }
        }

        $path = $this->path("seeder") . $name . ".php";

        if ($this->checkExistent($path)) {
            echo "Seeder $name already exists";
            exit;
        }

        if ($this->configureSeeder($name, $path)) {

            if (isset($this->run_flag) && $this->run_flag) {
                $this->flagHandler($name, $flag, "seeder", $path);
            }

            return true;
        }

        print("Unable to create seed file " . $name);
        return false;
    }

    public function seed() 
    {
        $this->server->load_app_models();

        if(isset($this->arguments[2])) {
            
            $name = $this->arguments[2];
            $seed_file = "./database/Seeders/{$name}.php";

            $this->requireOnce($seed_file);
            $class = new ($this->FileClassName($seed_file)['class']);
            $class->run();

        }
        else 
        {
            $all_seed_file = glob("./database/Seeders/*.php");
            
            if($all_seed_file) 
            {
                foreach($all_seed_file as $seed_file)
                {
                    $this->requireOnce($seed_file);
                    $class = new ($this->FileClassName($seed_file)['class']);
                    $class->run();
                }
            }
        
        }

        echo "\nDatabase seeding completed!";
        
    }
    
}
