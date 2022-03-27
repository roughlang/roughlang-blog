<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUploadFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('upload_files', function (Blueprint $table) {
            $table->id();
            /**
             * user id
             * If no user, 0
             */
            $table->string('user_id');
            /**
             * If no user name, empty
             */
            $table->string('user_name');
            /**
             * type
             * 1. Public.
             * 2. Authenticated users only. (public)
             * 3. Authenticated users only. (private)
             */
            $table->string('type');
            /**
             * location
             * 1. local storage
             * 2. S3
             */
            $table->string('location');
            $table->string('path');
            $table->string('delete_flag');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('upload_files');
    }
}
